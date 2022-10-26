# Media Queries

This app demonstrates how to use media queries in CSS files. 

Fork and clone this repo to consult the files as you read the README. I'll be referring to `live-demo.html` and `live-demo.css` throughout the README. Open `live-demo.html` in your browser and consult it and `live-demo.css` while reading through the README. Complete the mini-assignment at the end of the README using the files in the "practice" folder. `index.html` and `styles.css` serve as a slightly more advanced example of media queries that you can consult.

## About Media Queries

### General Overview
Media queries are an essential tool for building responsive websites, especially "Mobile First" websites. Including media queries in your CSS allows you to change the layout of your webpage based upon the screen size of the device on which its being viewed. For example, we'll probably want a different layout for mobile phone users than desktop users.

Media queries are included in your CSS file starting with the `@media` tag. You will then specify the type of media you want to query - `screen`, `print`, or `speech`. 
```
@media screen {

}
```

`screen` refers to devices with screens - mobiles, laptops, desktops, etc. `print` refers to print previews and print devices. `speech` refers to text-to-speech devices. So if you wanted to target screens, you would write `@media screen`. To select all device types, you can write `@media all` or simply `@media`.

```
@media all {

}
or
@media {

}
```

After selecting your screen type, you'll specifiy a condition that must be met in order for the styles you've defined within your media query to apply to your webpage. Oftentimes, this condition relates to screen width - we want to rearrange our layout depending on how wide the screen is. A query for a minimum screen-width of `500px` would look something like this `@media (min-width: 500px) {}` (styling attributes would go within the curly braces). Let's imagine that we have an h1 tag with an id of "header" whose font color we want to change to yellow when the screen width exceeds 500px. We would write the following in our CSS file:

```
@media screen and (min-width: 500px){
     #header {
        color: hsl(60, 90%, 60%);
    }
}

or

@media (min-width: 500px){
    #header {
        color: hsl(60, 90%, 60%);
    }
}
```

#### True or False values

While CSS is often thought of as a "styling language" more than a "programming language", media queries actually do perform a programmatic operation - they check and see if a condition evaluates to true or false. The styles inside of the query will only apply if the specified conditions are met (i.e. a condition like `min-width: 500px`).

### Order and Specificity

The rules of order and specificity still apply when writing media queries. If you write default styles outside of your media query that you want to override inside your media query, you'll have to use the same level of specificity or greater to change the styles:

```
#some-id {
    color: blue;
}

@media (min-width: 600px){
    #some-id {
        color: red;
    }
}
```

Similarly, you'll want to make sure you write the order of your media queries correctly. Let's imagine, for example, you want to have two separate media queries, one that fires when a screen exceeds `500px` and one that fires when a screen exceeds `800px`. Because CSS is read from top to bottom by a computer, you'd want to write your media queries in this order:

```
@media (min-width: 500px){
    h1 {
        color: green;
    }
}

@media(min-width: 800px){
    h1 {
        color: purple;
    }  
}
```

Why? Well, the styles inside of media queries are applied when the conditions specified in the media query are met. In this instance, a width that exceeds `800px` would also exceed `500px`. So, the styles inside of our first media query are _still applying_. They're simply being overridden by the styles inside of our second media query. However, if we switch the order of the media queries

```
@media(min-width: 800px){
    h1 {
        color: purple;
    }  
}

@media (min-width: 500px){
    h1 {
        color: green;
    }
}
```
we'd run into a problem. We want our styles inside of our `800px` media query to override the styles in our `500px` media query, but that won't happen in this example, since our `500px` media query is written _after_ our `800px` media query. Its conditions will still evaluate to true, and since it was read most recently by the computer, its styles are the styles that will apply.

This rule also holds true for setting base styles (styles that are written outside of any media query). We'll want to always write those styles first, otherwise we'd have the same problem:

```
@media (min-width: 500px){
    h1 {
        color: green;
    }
}

@media(min-width: 800px){
    h1 {
        color: purple;
    }  
}

h1 {
    color: red;
}

```

Because our base `h1` styles are being written further down in our file than our media queries, the computer will interpret those instructions as the final instructions, and our media query styles won't apply.

## Mobile First Design

Media queries are essential for what's known as 'Mobile-First' design. This can sound like a big fancy 'tech' term, but it's really pretty simple: you want your basic webpage layout to be geared toward mobile users. Around 50% of all web traffic now occurs over mobile devices, and it's projected that that number will only continue increasing. For this reason, we want to make sure that our webpages are easily viewable and navigable on mobile devices.

How do media queries play a roll? Well, we'll want to set our base styles (the styles we write outside of media queries) for smaller screens. Then, we'll use media queries to check and see if screens are larger than a minimum width. If they are, we'll apply some modified styling adjustments that reformat our webpage layout. This approach would looks something like this:

```
h1 {
    color: yellow;
}

@media (min-width: 500px) {
    h1 {
        color: orange;
    }
}

@media (min-width: 900px){
    h1 {
        color: red;
    }
}
```

In this scenario, we want `h1`s to have a yellow font color on small screens, an orange font color on medium screens, and a red font color on larger screens. We set the base styles to the styles that we want to apply to our small screens, then use media queries to modify those styles for larger screens. This is a basic example, but you'll likely want to do this for things like webpage layouts, which are going to matter more for varying screen sizes.

## Mini-assignment

In the folder labelled "practice" you'll find two files - practice.html and practice.css. You will be working in practice.css. This will test your knowledge of Media Queries, CSS grid, and general CSS (you might have to do some googling).

#### Deliverables

<ol>
    <li>Set the following base styles:
        <ul>
            <li>Body
                <ul>
                    <li>a margin of 0</li>
                    <li>a grid layout with a row for a header and a row for a main display.</li>
                </ul>
            </li>
            <li>The div with the id 'header'
                <ul>
                    <li>It will occupy the first row of its parent container's grid.</li>
                    <li>You will give a background color of your choise using hsl, rgb, or hex colors.</li>
                    <li>All items in this div should be centered vertically (hint: what else will this div need to <a href="https://github.com/richwblake/CSS_Grid_And_Flexbox_Demo">make that happen?</a>)</li>
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
                    <li>will not be visible (hint: how do you make sure that an element is not displayed?)</li>
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
    <li>When the screen width is greater than 600px, the following styles should be implemented
        <ul>
            <li>'main' div
                <ul>
                       <li>will have two columns - one on the right hand side that is 200px, one on the lefthand side that is 100% of the viewport width minus 200px (hint: you may need <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc">this</a>)</li>
                </ul>
            </li>
            <li>'sidebar' div
                <ul>
                    <li>Will be visible</li>
                    <li>Will occupy the right most column of its parent container</li>
                    <li>Will have a distinct background color of your choice using hsl, rgb, or hex</li>
                </ul>
            </li>
            <li>'content' div
                <ul>
                    <li>Should occupy the left most column of its parent container</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>When the screen width is greater than 800px, the following styles should be implemented
        <ul>
            <li>'main' div
                <ul>
                    <li>Should have 3 columns - a 200px column on the left, a 200px column on the right, and a column in the middle that is 100% of the viewport width minus the width of the two other columns</li>
                </ul>
            </li>
            <li>'sidebar' div
                <ul>
                    <li>should occupy the right most column of its parent container</li>
                </ul>
            </li>
            <li> 'ad-bar' div
                <ul>
                    <li>should occupy the left most column of its parent container</li>
                    <li>should have a distinct background color set using hsl, rgb, or hex</li>
                </ul>
            </li>
            <li>'content' div
                <ul>
                    <li>should occupy the center column of its parent container</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>

Your display should look similar to this at screen sizes below 600px;

<img width="495" alt="Screen Shot 2022-04-04 at 4 30 22 PM" src="https://user-images.githubusercontent.com/89106805/161649288-7d848453-2788-45bd-9094-511d2536cc1e.png">

Similar to this between screen sizes 600px and 800px;

<img width="714" alt="Screen Shot 2022-04-04 at 4 32 13 PM" src="https://user-images.githubusercontent.com/89106805/161649339-2da18ba7-8e56-447c-9f81-805fa369830b.png">


And similar to this for screens over 800px;

<img width="820" alt="Screen Shot 2022-04-04 at 4 32 41 PM" src="https://user-images.githubusercontent.com/89106805/161649374-5134fb89-a785-458c-ac1b-2fb52625c8b6.png">

## Resources

If you want to learn more about Media Queries, I would highly recommend consulting <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries">MDN Docs</a>.

