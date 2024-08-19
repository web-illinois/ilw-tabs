import { LitElement, html } from 'lit';
import styles from './ilw-tabs.styles';
import './ilw-tabs.css';

class Tabs extends LitElement {

    static get properties() {
        return {
          theme: { type: String, attribute: true },
          width: { type: String, attribute: true },
          default: { type: String, attribute: true },
          horizontal: { type: Boolean, attribute: true },
          compact: { default: false, type: Boolean, attribute: false, reflect: true }
        };
      }
    
    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
        this.width = '';
        this.default = '';
        this.horizontal = false;
        this.handleMutation = this.handleMutation.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        document.addEventListener('DOMContentLoaded', this.handleDocumentLoaded.bind(this));
    }

    connectedCallback() {
        super.connectedCallback();
        if (!this.hasContainerSupport()) {
            this.addResizeListeners();
        }
        this.addMutationObserver();
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
            this.setActiveTab(this.querySelector('*[role="tab"]'));
        } else {
            this.setActiveTab(this.querySelector(`*[role="tab"][aria-controls="${this.default}"`));
        }
    }
    
    handleMutation(evt) {
        this.initializeTabs();
    }
    
    handleResize(evt) {
        this.classList[this.isCompact() ? 'add' : 'remove']('ilw-compact');
    }
    
    handleTabClick(evt) {
        this.setActiveTab(evt.currentTarget);
    }
    
    handleKeyPress(evt) {
        if (evt.code == 'Enter' || evt.code == 'Space') {
          this.setActiveTab(evt.currentTarget);
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
    
    getTabPanel(tab) {
        return document.getElementById(tab.getAttribute('aria-controls'));
    }
    
    hasContainerSupport() {
        return CSS.supports('container-type', 'inline-size');
    }
    
    initializeTab(tab) {
        if (!this.tabIsInitialized(tab)) {
          tab.setAttribute("tabindex", 0);
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
    
    setActiveTab(activeTab) {
        console.debug(activeTab);
        this.getAllTabs().forEach(tab => {
          (tab === activeTab) ? this.setTabAsActive(tab) : this.setTabAsInactive(tab)
        });
    }
    
    setTabAsActive(tab) {
        tab.setAttribute('aria-selected', 'true');
        this.getTabPanel(tab).setAttribute('data-ilw-tab-visible', '1');
    }
    
    setTabAsInactive(tab) {
        tab.setAttribute('aria-selected', 'false');
        this.getTabPanel(tab).setAttribute('data-ilw-tab-visible', '0');
    }
    
    tabIsInitialized(tab) {
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

customElements.define('ilw-tabs', Tabs);