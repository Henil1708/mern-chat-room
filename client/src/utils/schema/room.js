import * as Yup from 'yup' 

export const addRoomSchema = Yup.object().shape({
    roomName: Yup.string('Room name field must a valid string').required('Room name field is required'),
});