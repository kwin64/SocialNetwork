import React, {ChangeEvent} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        console.log()
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status || '----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode.bind(this)}
                           autoFocus={true}
                           value={this.state.status}
                           onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
