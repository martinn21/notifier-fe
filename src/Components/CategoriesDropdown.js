import React from 'react'
export const CustomDropdown = (props) => (
    <div className="form-group">
        <label className="form-label">
            Select a subscriber category
        </label>
        <select
            className="form-control"
            name={props.name}
            onChange={props.onChange}
        >
            <option defaultValue>Select a category</option>
            {props.options.map((item, index) => (
                <option key={index} value={item.name}>
                    {item.name}
                </option>
            ))}
        </select>
    </div>
)
export default class CustomListDropDown extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'category',
            collection: [],
            value: '',
        }
    }
    componentDidMount() {
        fetch('https://x9pjbaafwf.execute-api.us-west-1.amazonaws.com/dev/category')
            .then((response) => response.json())
            .then((res) => this.setState({ collection: res }))
    }
    onChange = (event) => {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div className="container mt-4">
                <CustomDropdown
                    name={this.state.name}
                    options={this.state.collection}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}