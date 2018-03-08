import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Card from "./Card";
import _ from "lodash";
import campaign from './img/Campaigns.JPG';
import annualBudget from './img/AnnualBudget.JPG';
import investment from './img/Investment.JPG';
import response from './img/Response.JPG';
import responseByChannel from './img/ResponseByChannel.JPG';
import "./AddRemoveLayout.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);



/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class AddRemoveLayout extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 4 },
        rowHeight: 100
    };

    constructor(props) {
        super(props);

        this.state = {
            items:
                [{w: 2, h: 1, x: 9, y: 0, i: "0", add:false},
                    {w: 2, h: 1, x: 9, y: 1, i: "1", add:false},
                    {w: 2, h: 1, x: 9, y: 2, i: "2", add:false},
                    {w: 2, h: 2, x: 9, y: 3, i: "3", add:false},
                    {w: 3, h: 3, x: 5, y: 0, i: "4", add:false},
                    {w: 3, h: 3, x: 1, y: 0, i: "5", add:false},
                    {w: 3, h: 3, x: 1, y: 3, i: "6", add:false},
                    {w: 3, h: 3, x: 5, y: 3, i: "7", add:false},
                    {w: 1, h: 1, x: 0, y: 0, i: "8", add:true}],
            newCounter: 9,
            data:[ {
                heading: "Impressions",
                value: "379K"
            },{
                heading: "Revenue",
                value: "$12.6M"
            },{
                heading: "Return On Investment",
                value: "60%"
            },{
                heading: "Response by Channel",
                imgSrc: responseByChannel
            },{
                heading: "Investment",
                imgSrc: investment
            },{
                heading: "Campaigns",
                imgSrc: campaign
            },{
                heading: "Annual Budget",
                imgSrc: annualBudget
            },{
                heading: "Response",
                imgSrc: response
            },{
                heading: "Impressions",
                value: "379K"
            },{
                heading: "Revenue",
                value: "$12.6M"
            },{
                heading: "Return On Investment",
                value: "60%"
            },{
                heading: "Response by Channel",
                imgSrc: responseByChannel
            },{
                heading: "Investment",
                imgSrc: investment
            },{
                heading: "Campaigns",
                imgSrc: campaign
            },{
                heading: "Annual Budget",
                imgSrc: annualBudget
            },{
                heading: "Response",
                imgSrc: response
            },{
                heading: "Impressions",
                value: "379K"
            },{
                heading: "Revenue",
                value: "$12.6M"
            },{
                heading: "Return On Investment",
                value: "60%"
            },{
                heading: "Response by Channel",
                imgSrc: responseByChannel
            },{
                heading: "Investment",
                imgSrc: investment
            },{
                heading: "Campaigns",
                imgSrc: campaign
            },{
                heading: "Annual Budget",
                imgSrc: annualBudget
            },{
                heading: "Response",
                imgSrc: response
            },{
                heading: "Impressions",
                value: "379K"
            },{
                heading: "Revenue",
                value: "$12.6M"
            },{
                heading: "Return On Investment",
                value: "60%"
            },{
                heading: "Response by Channel",
                imgSrc: responseByChannel
            },{
                heading: "Investment",
                imgSrc: investment
            },{
                heading: "Campaigns",
                imgSrc: campaign
            },{
                heading: "Annual Budget",
                imgSrc: annualBudget
            },{
                heading: "Response",
                imgSrc: response
            },{
                heading: "Impressions",
                value: "379K"
            },{
                heading: "Revenue",
                value: "$12.6M"
            },{
                heading: "Return On Investment",
                value: "60%"
            },{
                heading: "Response by Channel",
                imgSrc: responseByChannel
            },{
                heading: "Investment",
                imgSrc: investment
            },{
                heading: "Campaigns",
                imgSrc: campaign
            },{
                heading: "Annual Budget",
                imgSrc: annualBudget
            },{
                heading: "Response",
                imgSrc: response
            },{
                heading: "Impressions",
                value: "379K"
            },{
                heading: "Revenue",
                value: "$12.6M"
            },{
                heading: "Return On Investment",
                value: "60%"
            },{
                heading: "Response by Channel",
                imgSrc: responseByChannel
            },{
                heading: "Investment",
                imgSrc: investment
            },{
                heading: "Campaigns",
                imgSrc: campaign
            },{
                heading: "Annual Budget",
                imgSrc: annualBudget
            },{
                heading: "Response",
                imgSrc: response
            }]
        };

        this.onAddItem = this.onAddItem.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
    }

    createElement(el) {
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
        };
        const i = el.add ? "+" : el.i;
        return (
            <div key={i} data-grid={el}>
                {el.add ? (
                    <span className="spanCard"
                        onClick={this.onAddItem}
                    >
            <Card heading={"Add"} value={"+"}/>
          </span>
                ) : (
                    <Card heading={this.state.data[i].heading} value={this.state.data[i].value} imgSrc={this.state.data[i].imgSrc}/>
                )}
                <span
                    className="remove"
                    style={removeStyle}
                    onClick={this.onRemoveItem.bind(this, i)}
                >
          x
        </span>
            </div>
        );
    }

    onAddItem() {
        /*eslint no-console: 0*/
        console.log("adding", "n" + this.state.newCounter);
        this.setState({
            // Add a new item. It must have a unique key!
            items: this.state.items.concat({
                i: "" + this.state.newCounter,
                x: (this.state.items.length * 2) % (this.state.cols || 12),
                y: Infinity, // puts it at the bottom
                w: 2,
                h: 2
            }),
            // Increment the counter to ensure key is always unique.
            newCounter: this.state.newCounter + 1
        });
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
        this.setState({ layout: layout });
    }

    onRemoveItem(i) {
        console.log("removing", i);
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }

    render() {
        return (
            <div>
                <button className="Button" onClick={this.onAddItem}>Add Item</button>
                <ResponsiveReactGridLayout
                    onLayoutChange={this.onLayoutChange}
                    onBreakpointChange={this.onBreakpointChange}
                    {...this.props}
                >
                    {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default AddRemoveLayout;

