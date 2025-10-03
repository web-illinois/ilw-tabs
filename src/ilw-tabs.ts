import { LitElement, html } from 'lit';
import styles from './ilw-tabs.styles';
import './ilw-tabs.css';

import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-tabs')
export default class Tabs extends LitElement {

    @property({type: String})
    theme: "white" | "gray" | "orange" | "blue" | "orange-gradient" | "blue-gradient" = "white";

    @property() 
    width: string = "";

    @property() 
    default: string = "";

    @property({type: Boolean}) 
    horizontal: boolean = false;

    @property({type: Boolean, reflect: true }) 
    compact: boolean = true;

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = 'white';
        this.width = '';
        this.default = '';
        this.horizontal = false;
        this.handleMutation = this.handleMutation.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        if (!this.hasContainerSupport()) {
            this.addResizeListeners();
        }
        this.addMutationObserver();
        this.handleDocumentLoaded();
    }
    
    disconnectedCallback() {
        if (!this.hasContainerSupport()) {
          this.removeResizeListeners();
        }
        super.disconnectedCallback();
    }

    handleDocumentLoaded() {
        this.initializeTabs();
        if (this.default == '') {
            this.setActiveTab(this.querySelector('*[role="tab"]') as Element);
        } else {
            this.setActiveTab(this.querySelector(`*[role="tab"][aria-controls="${this.default}"`) as Element);
        }
    }
    
    handleMutation() {
        this.initializeTabs();
    }
    
    handleResize() {
        this.classList[this.isCompact() ? 'add' : 'remove']('ilw-compact');
    }
    
    handleTabClick(evt: MouseEvent) {
        this.setActiveTab(evt.currentTarget as Element);
    }
    
    handleKeyPress(evt: KeyboardEvent) {
        if (evt.code == 'Enter' || evt.code == 'Space') {
          this.setActiveTab(evt.currentTarget as Element);
        } else if (evt.code == 'ArrowUp' || evt.code == 'ArrowLeft') {
            let prev = (evt.currentTarget as Element).previousElementSibling;
            if (prev instanceof HTMLElement) {
                this.setActiveTab(prev);
                prev.focus();
            }
        } else if (evt.code == 'ArrowDown' || evt.code == 'ArrowRight') {
            let next = (evt.currentTarget as Element).nextElementSibling;
            if (next instanceof HTMLElement) {
                this.setActiveTab(next);
                next.focus();
            }
        }
    }

    addMutationObserver() {
        const observer = new MutationObserver(this.handleMutation);
        observer.observe(this, { attributes: false, childList: true, subtree: true });
    }
    
    addResizeListeners() {
        window.addEventListener('load', this.handleResize.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    
    getAllTabs() {
        return this.querySelectorAll('*[role="tab"]');
    }
    
    getTabPanel(tab: Element | null): HTMLElement | null {
        const panelId = tab?.getAttribute('aria-controls');
        return panelId ? document.getElementById(panelId) : null;
    }
    
    hasContainerSupport() {
        return CSS.supports('container-type', 'inline-size');
    }
    
    initializeTab(tab: Element) {
        if (!this.tabIsInitialized(tab) && tab instanceof HTMLElement) {
          tab.setAttribute("tabindex", "-1");
          tab.setAttribute('data-ilw-initialized', '1');
          tab.addEventListener('click', this.handleTabClick);
          tab.addEventListener('keydown', this.handleKeyPress);
        }
    }
    
    initializeTabs() {
        this.getAllTabs().forEach(tab => this.initializeTab(tab));
    }
    
    isCompact() {
        return this.offsetWidth < 800;
    }
    
    removeResizeListeners() {
        window.removeEventListener('load', this.handleResize.bind(this));
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
    
    setActiveTab(activeTab: Element) {
        this.getAllTabs().forEach(tab => {
          (tab === activeTab) ? this.setTabAsActive(tab) : this.setTabAsInactive(tab)
        });
    }
    
    setTabAsActive(tab: Element) {
        const panel = this.getTabPanel(tab);
        if (panel) {
           tab.setAttribute('aria-selected', 'true');
           tab.setAttribute("tabindex", "0");
           panel.setAttribute('data-ilw-tab-visible', '1');
        } else {
            console.warn('Tab panel not found for tab:', tab);
        }
    }
    
    setTabAsInactive(tab: Element) {
        const panel = this.getTabPanel(tab);
        if (panel) {
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute("tabindex", "-1");
           panel.setAttribute('data-ilw-tab-visible', '0');
        } else {
            console.warn('Tab panel not found for tab:', tab);
        }
    }
    
    tabIsInitialized(tab: Element) {
        return tab.hasAttribute('data-ilw-initialized');
    }

    render() {
        return html`
        <div id="outer" class="${this.theme} ${this.width} ${this.horizontal ? 'horizontal' : ''}">
            <div id="container" class="${this.theme} ${this.width}">
                <div id="tablist" role="tablist">
                    <slot name="tabs"></slot>
                </div>
                <div id="tabpanels">
                    <slot></slot>
                </div>
            </div>
        </div>`;
    }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-tabs": Tabs;
  }
}