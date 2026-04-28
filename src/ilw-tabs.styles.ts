import { css } from 'lit';

export default css `
    #container {
        display: var(--ilw-tabs--display);
        background: var(--ilw-color--background);
        column-gap: 60px;
        margin: 0 auto;
        max-width: var(--ilw-tabs--max-width);
        padding: var(--ilw-tabs--padding, 60px 30px 75px);
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
    }

    #outer.page {
        background: var(--ilw-color--background);
    }

    #container.auto, #container.page {
        --ilw-tabs--padding: 60px var(--ilw-margin--side, 0) 75px;
        --ilw-tabs--max-width: 1200px;
    }

    .horizontal #tablist {
        border-bottom: var(--ilw-tabs--button-border);
        margin-bottom: 20px;
    }

    #tabpanels {
        width: 100%;
    }

    @container (max-width: 800px) {
        #container, #container.auto, #container.page {
            --ilw-tabs--display: block;
            --ilw-tabs--tablist-display: flex;
            --ilw-tabs--tablist-width: auto;
        }

        #tablist {
            margin-bottom: 20px;
        }

        .horizontal #tablist {
            border-bottom: none;
        }
     }
    
    #container.compact, #container.compact.auto, #container.compact.page {
        --ilw-tabs--display: block;
        --ilw-tabs--tablist-display: flex;
        --ilw-tabs--tablist-width: auto;
        --ilw-tabs--padding: 60px 20px 75px;
    }

    #container.compact #tablist {
        margin-bottom: 20px;
    }

    #container.compact .horizontal #tablist {
        border-bottom: none;
    }
`;