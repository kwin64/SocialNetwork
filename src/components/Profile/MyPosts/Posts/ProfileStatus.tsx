import React from 'react';


type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
