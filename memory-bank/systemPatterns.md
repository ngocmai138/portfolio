# System Patterns

_v1.0 | Created: 2024-03-21_
_Π: INITIALIZING | Ω: PLAN_

## 🏛️ Architecture Overview

### Core Module (`/src/app/core`)

- Constants: Các giá trị cố định của ứng dụng
- Guards: Route guards cho bảo mật
- Interceptors: HTTP interceptors
- Services: Các core services
  - ThemeService: Quản lý theme
  - LoadingService: Quản lý loading state
  - SEOService: Quản lý SEO meta tags

### Feature Modules (`/src/app/features`)

- Home: Trang chủ với giới thiệu
- About: Thông tin chi tiết về developer
- Portfolio: Showcase các dự án
- Skills: Hiển thị kỹ năng technical
- Blog: Chia sẻ kiến thức
- Contact: Form liên hệ

### Shared Module (`/src/app/shared`)

- Components: Các component dùng chung
  - LoadingSpinner: Component loading
  - ThemeToggle: Switch theme
- Directives: Custom directives
- Pipes: Custom pipes

### Models (`/src/app/models`)

- Interfaces và types dùng chung
- Enums
- Constants

### Utils (`/src/app/utils`)

- Helper functions
- Custom decorators
- Common utilities

### Assets

- Icons: Material Icons
- Images: Hình ảnh dự án
- Styles: SCSS files
  - Variables
  - Mixins
  - Global styles
  - Theme definitions

## 🔄 Data Flow

1. Components gọi services
2. Services xử lý business logic
3. State được quản lý qua services (hoặc NgRx nếu cần)
4. Components render data từ services

## 🎨 UI/UX Patterns

- Material Design guidelines
- Responsive breakpoints
- Theme switching mechanism
- Loading states
- Error handling
- Animations

## 🔒 Security Patterns

- Route guards
- HTTP interceptors
- Form validation
- XSS prevention
- CSRF protection
