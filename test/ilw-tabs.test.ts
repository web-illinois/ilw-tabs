import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-tabs";

const content = html`
    <ilw-tabs id="tabs">
        <div slot="tabs">
            <button role="tab" aria-controls="panel1">Tab #1</button>
            <button role="tab" aria-controls="panel2">Tab #2</button>
            <button role="tab" aria-controls="panel3">Tab #3</button>
            <button role="tab" aria-controls="panel4">Tab #4</button>
        </div>
        <div id="panel1">
          <h3>Degree Programs</h3>
          <p>There's no <a href="#">academic experience</a> quite like Grainger Engineering. Ranked the #6 college of engineering with 13 top 5 programs from US News and World Report, we have a reputation of being the best of the best. But a lot goes into those numbers. Engaging professors. State-of-the-art facilities. Groundbreaking student resources. Brilliant classmates. Supportive environment. Endless opportunities. Whether you're a first year undergraduate or working toward a PhD, our programs are designed to help you become the engineer you want to be.</p>
          <p>Second paragraph</p>
          <p><a href="#" class="ilw-button">Sample button</a></p>
        </div>
        <div id="panel2">
            <p>Panel #2. There's a <a href="#">link that goes somewhere</a> here.</p>
            <p><a href="#" class="ilw-button">Sample button</a></p>
        </div>
        <div id="panel3">
            <p>Panel #3</p>
            <ul class="ilw-buttons">
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Find a departmental advisor</a></li>
            </ul>
        </div>
        <div id="panel4">
            <p>Panel #4 There's a <a href="#">link that goes somewhere</a> here.</p>
        </div>
    </ilw-tabs>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Degree Programs");
    await expect(element).toBeInTheDocument();
    const element2 = screen.getByText("Panel #2");
    await !expect(element2).toBeInTheDocument();
});