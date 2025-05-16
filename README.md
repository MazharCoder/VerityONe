# VerityONE - AI-Powered QA Platform

![VerityONE Banner](https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Overview

VerityONE is an AI-powered SaaS platform designed to streamline test case writing, bug tracking, and project management for software quality assurance teams. The platform leverages artificial intelligence to automate test case generation, provide intelligent insights, and optimize QA workflows.

## Live Demo

Visit the live demo: [VerityONE Demo](https://lustrous-sunshine-c4e368.netlify.app)

## Features

- 🤖 **AI-Powered Test Generation**: Automatically generate test cases from requirements
- 🐛 **Smart Bug Tracking**: Track and manage software defects with AI-driven insights
- 📊 **Project Management**: Kanban boards, sprint planning, and task management
- 📈 **Analytics & Reporting**: Comprehensive dashboards and performance metrics
- 🔄 **DevOps Integration**: Seamless integration with popular development tools
- 🤝 **Team Collaboration**: Real-time updates and team communication features

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/verityone.git
```

2. Install dependencies:
```bash
cd verityone
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context
- **Routing**: React Router
- **UI Components**: Custom components with Tailwind
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest
- **Deployment**: Netlify

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── bugs/          # Bug tracking components
│   ├── dashboard/     # Dashboard components
│   ├── layout/        # Layout components
│   ├── project/       # Project management components
│   └── testcase/      # Test case components
├── pages/             # Page components
├── routes/            # Route configurations
├── styles/            # Global styles and animations
└── main.tsx          # Application entry point
```

## Bug Tracking Components

The bug tracking system is modularized into several components:

- `BugAttachments.tsx`: Handles file attachments for bug reports
- `BugAIInsights.tsx`: Provides AI-powered analysis and suggestions
- `BugActions.tsx`: Contains action buttons and integration options
- `BugActivity.tsx`: Shows activity history and comments
- `BugComments.tsx`: Manages the comment system
- `BugDetails.tsx`: Displays detailed bug information
- `BugList.tsx`: Shows the list of all bugs

## Deployment

The application is deployed on Netlify. You can visit the live demo at:
[https://lustrous-sunshine-c4e368.netlify.app](https://lustrous-sunshine-c4e368.netlify.app)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@verityone.com or join our Slack channel.

## Acknowledgments

- Thanks to all contributors who have helped shape VerityONE
- Special thanks to the open source community