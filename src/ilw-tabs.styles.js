import { css } from 'lit';

export default css `
    #container {
        display: var(--ilw-tabs--display);
        background: var(--ilw-tabs--background);
        column-gap: 60px;
        margin: 0 auto;
        max-width: var(--ilw-tabs--max-width);
        padding: 60px 30px 75px;
    }

    #container.white {
        --ilw-tabs--color: black;
        --ilw-tabs--button-color: var(--il-blue);
        --ilw-tabs--button-color--focus: white;
        --ilw-tabs--focus-button-background: var(--il-blue);
        --ilw-tabs--selected-button-color: var(--il-blue);
        --ilw-tabs--selected-button-background: var(--il-orange);
        --ilw-tabs--button-border: 2px solid var(--il-blue);
    }
    #container.blue {
        --ilw-tabs--color: white;
        --ilw-tabs--background: var(--il-blue);
        --ilw-tabs--button-color: white;
        --ilw-tabs--button-border: 2px solid white;
        --ilw-tabs--focus-button-color: var(--il-blue);
        --ilw-tabs--focus-button-background: white;
        --ilw-tabs--selected-button-color: white;
        --ilw-tabs--selected-button-background: var(--il-orange);
        --ilw-button--background-color: var(--il-blue);
        --ilw-button--foreground-color: #fff;
        --ilw-button--border-color: #fff;
        --ilw-button--focused-background-color: #fff;
        --ilw-button--focused-foreground-color: var(--il-blue);
        --ilw-button--focused-border-color: #fff;
    }

    #outer.white {
        --ilw-tabs--background: white;
    }

    #outer.gray {
        --ilw-tabs--background: var(--il-storm-lighter-4);
    }

    #outer.full, #outer.auto {
        left:50%;
        margin-left:-50vw;
        margin-right:-50vw;
        padding-left:0;
        padding-right:0;
        position:relative;
        right:50%;
        width:100vw;
        background: var(--ilw-tabs--background);
    }

    #container.auto {
        padding: 60px max(calc(1.875rem), calc(50px - 37.5rem)) 75px;
        max-width: 1200px;
    }

    .horizontal #tablist {
        border-bottom: var(--ilw-tabs--button-border);
        margin-bottom: 20px;
    }

    #tabpanels {
        width: 100%;
    }

    @container (max-width: 800px) {
        #container {
            --ilw-tabs--display: block;
            --ilw-tabs--tablist-display: flex;
            --ilw-tabs--tablist-width: auto;
            padding: 60px 20px 75px;
        }

        #tablist {
            margin-bottom: 20px;
        }

        .horizontal #tablist {
            border-bottom: none;
        }
     }
    
      #container.compact {
        --ilw-tabs--display: block;
        --ilw-tabs--tablist-display: flex;
        --ilw-tabs--tablist-width: auto;
        padding: 60px 20px 75px;
    }

    #container.compact #tablist {
        margin-bottom: 20px;
    }

    #container.compact .horizontal #tablist {
        border-bottom: none;
    }
`;