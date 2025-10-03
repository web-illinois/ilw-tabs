import { css } from 'lit';

export default css `
    #container {
        display: var(--ilw-tabs--display);
        background: var(--ilw-color--background);
        column-gap: 60px;
        margin: 0 auto;
        max-width: var(--ilw-tabs--max-width);
        padding: 60px 30px 75px;
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
        padding: 60px var(--ilw-content--main-margin, 0) 75px;
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