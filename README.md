# ilw-tabs

Links: **[ilw-tabs in Builder](https://builder3.toolkit.illinois.edu/component/ilw-tabs/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This is a tab component, where you have a bunch of buttons that trigger new content information inside a fixed area. One section in a tabs component will always be visible (usually the first piece, but this may be changed). This is used to nicely display groups of information into a compact area. 

Do not use this control when a user is going to read the entire page or you need all the information displayed (like a person completing multiple steps of a process). If you find yourself in this situation, you may want to break the page into multiple pages. 

Each section of content is divided into 2 parts:
* A tab list, which is a list of buttons used to make the panel visible. The tab list should only contain buttons. 
* A panel, which contains the primary content. This may contain text, headings, images, lists, links, and other rich-text information. Because the tab list is a list of buttons and tied to the panel programatically, you may or may not duplicate the button text in the tab panel.

When a tab is selected, its panel is made visible and other panels are hidden.

The `ilw-tabs` component has the following slots:
* `tabs`: the list of buttons to display. This slot should only contain the `button` element. 

The `ilw-tabs` component has the following attributes:
* `theme`: the theme/background of the content. Options are `blue`, `orange`, `gray`, `white`
* `width`: whether or not this is contained in the parent (default), if it will expand to full width (`full`), or if just the background will expand and the text will be in a narrow window (`auto`). 
* `horizontal`: a boolean attribute that determines if the tabs are displayed in a horizontal view. Use this only if you have a few tabs in the list, as this is limited to a single row and may cause text to be truncated or displayed awkwardly. The default is to list the tabs vertically on the left-hand side, and in mobile view, both views will collapse to an accordion-like view.  
* `default`: the ID of the tab that should be opened on page load. This will default to the first tab. 

## Code Examples

```html
<h2 id="tab-header">Programs</h2>
<ilw-tabs aria-labelledby="tab-header">
    <div slot="tabs">
        <button role="tab" aria-controls="tab-panel1" id="tab-button1">Degree Programs</button>
        <button role="tab" aria-controls="tab-panel2" id="tab-button2">Non-degree Programs</button>
        <button role="tab" aria-controls="tab-panel3" id="tab-button3">Classroom Experience</button>
    </div>
    <div id="tab-panel1" role="tabpanel" labelled-by="tab-button1">
      <h3>Degree Programs</h3>
      <!-- ... --->
    </div>
    <div id="tab-panel2" role="tabpanel" labelled-by="tab-button2">
      <h3>Non-degree Programs</h3>
      <!-- ... --->
    </div>
    <div id="tab-panel3" role="tabpanel" labelled-by="tab-button3">
      <h3>Classroom Experience</h3>
      <!-- ... --->
    </div>
</ilw-tabs>
```

## Accessibility Notes and Use

The tabs are automatically activated when the user chooses an item. 

Ensure that the buttons and panels are labelled correctly inside the component using the `id` and `aria-labelledby` attributes. IDs should be unique in the HTML document. 

A "nice-to-have" is to label the `ilw-tabs` component with a header using the `aria-labelledby` attribute. 

## External References

* https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
* https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/
* https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus
* https://www.nngroup.com/articles/tabs-used-right/ 
