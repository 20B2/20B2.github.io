import { Component } from '@angular/core';

import { User } from '../../models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user-form.component.html'
})

export class UserFormComponent {
    model: User = new User(10, 'Binod', 'Bhaktapur');
}