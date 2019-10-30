import { Notifications } from '../types/Notifications';

export default class NotificationSvc {
    public getAll(): Notifications {
        return {
            messages: [
                "Message 1", "Message 2"
            ]
        };
    }
}