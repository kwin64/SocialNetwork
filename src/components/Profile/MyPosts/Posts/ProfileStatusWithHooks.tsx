import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = props => {

    const {updateStatus, status} = props

    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    useEffect(() => {
        setNewStatus(status)
    }, [status])

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activeEditMode}>{status || '----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={newStatus}
                />
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
