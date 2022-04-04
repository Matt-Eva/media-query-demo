# media-query-demo

This app demonstrates how to use media queries in CSS files. 

For and clone this repo to consult the files as you read the README. Complete the mini-assignment at the end of the README using the files in the "practice" folder.

## Mini-assignment

In the folder labelled "practice" you'll find two files - practice.html and practice.css. You will be working in practice.css. This will also test your knowledge of CSS grid.

#### Deliverables

<ol>
    <li>Set the following default styles:
        <ul>
            <li>Body
                <ul>
                    <li>a margin of 0</li>
                    <li>a grid layout with a row for a header and a row for main display.</li>
                </ul>
            </li>
            <li>The div with the id 'header'
                <ul>
                    <li>It will occupy the first row of its parent container's grid.</li>
                    <li>You will give a background color of your choise using hsl, rgb, or hex colors.</li>
                    <li>All items in this div should be centered vertically (hint: what else will this div need to make that happen?)</li>
                </ul>
            </li>
            <li>The h1 element that is a child of 'header'
                <ul>
                    <li>Should be centered horizontally in its parent container.</li>
                </ul>
            </li>
            <li>The div with the id 'main'
                <ul>
                    <li>It will occupy the second row of its parent container's grid</li>
                    <li>It will have a grid layout with one column that spans the width of the screen.</li>
                </ul>
            </li>
            <li> The div with id 'sidebar'
                <ul>
                    <li>will not be visible</li>
                    <li>it will occupy the right-hand column of its parent container</li>
                    <li>it will have a background color of your choice (different from "header") using hsl, rgb, or hex</li>
                </ul>
            </li>
            <li>The div with the id 'content'
                <ul>
                    <li>It will occupy the single column of its parent container</li>
                </ul>
            </li>
            <li>The div with the id 'ad-bar'
                <ul>
                    <li>will not be visible</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>When the screen width is greater than 600px, the following styles shoulde override the default styles
        <ul>
            <li>'main' div
                <ul>
                       <li>will have two columns - one on the right hand side that is 200px, one on the lefthand side that is 100% of the viewport width minus 200px (hint: you may need <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc">this</a></li>
                </ul>
            </li>
            <li>'sidebar' div
                <ul>
                    <li>Will be visible</li>
                    <li>Will occupy the right most column of its parent container</li>
                    <li>Will have a distinct background color of your choice using hsl, rgb, or hex</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>

   
