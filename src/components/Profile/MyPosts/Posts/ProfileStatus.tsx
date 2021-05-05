import React from 'react';


type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }
    activeEditMode = () => {
        console.log()
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () => {
        console.log()
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactiveEditMode.bind(this)}
                           autoFocus={true}
                           value={this.props.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
