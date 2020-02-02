import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
  topics = ['Angular8', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMessage = '';

  constructor(private enrollmentService: EnrollmentService) {}

  userModel = new User('Piter', 'tom@test.com', 1234567890, 'default', 'morning', true);

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMessage = error.statusText);
  }
}
