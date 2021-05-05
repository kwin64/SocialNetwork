import React, {ChangeEvent} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
type LocalStateProfileStatusType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state: LocalStateProfileStatusType = {
        editMode: false,
        status: this.props.status as string
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: PropsType, prevState: LocalStateProfileStatusType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
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
