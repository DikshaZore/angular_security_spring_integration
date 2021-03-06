import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}
