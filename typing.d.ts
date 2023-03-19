// This file is used to declare types that are not available in the npm package

interface Message {
    text: string;
    createTime: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        image: string;
    };
}