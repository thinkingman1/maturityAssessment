
export const questions = [
  {
    category: "Category 1",
    questions: [
      {
        question: "How do you manage employee digital identity accounts when they join or leave the company?",
        options: [
          { label: "Manually, with high potential for errors and delays.", score: 1 },
          { label: "Partially automated, reducing some errors but still with manual intervention.", score: 2 },
          { label: "Fully automated with near real-time synchronization, minimizing human error.", score: 3 }
        ]
      },
      {
        question: "Can employees easily ask for access to tools or apps they need?",
        options: [
          { label: "No, all requests are handled manually by IT.", score: 1 },
          { label: "Yes, but limited to basic access requests with some automation.", score: 2 },
          { label: "Yes, with comprehensive self-service capabilities and automated approval workflows.", score: 3 }
        ]
      },
      {
        question: "When a new employee joins, do they get all the access they need right away?",
        options: [
          { label: "No, access is granted manually over time.", score: 1 },
          { label: "Partial access on the first day, fully granted over time.", score: 2 },
          { label: "Yes, full access from day one with automated provisioning.", score: 3 }
        ]
      },
      {
        question: "How do you handle access requests from external contractors or temporary employees?",
        options: [
          { label: "No system in place.", score: 1 },
          { label: "Basic monitoring with delayed responses.", score: 2 },
          { label: "Comprehensive monitoring with real-time alerts and responses.", score: 3 }
        ]
      },
      {
        question: "How can you ensure contractors/ consultants have the right privileges to execute their job effectively?",
        options: [
          { label: "Manually managed with potential for excessive access.", score: 1 },
          { label: "Partially automated with some oversight.", score: 2 },
          { label: "Fully automated with strict least privilege enforcement.", score: 3 }
        ]
      },
      {
        question: "How do you keep track of who can access what application in your company?",
        options: [
          { label: "Manually, often using spreadsheets", score: 1 },
          { label: "Centralized tracking with periodic reviews and some automation.", score: 2 },
          { label: "Continuously tracked with advanced analytics and real-time auditing.", score: 3 }
        ]
      },
      {
        question: "Are you confident that every employee has the right access to what they need?",
        options: [
          { label: "Not confident, manual reviews.", score: 1 },
          { label: "Moderately confident with periodic automated reviews.", score: 2 },
          { label: "Highly confident with continuous automated reviews.", score: 3 }
        ]
      },
      {
        question: "Are you adhering to regulatory compliances like DPDP Act of India etc",
        options: [
          { label: "No, not compliant.", score: 1 },
          { label: "Partially compliant.", score: 2 },
          { label: "Fully compliant with continuous monitoring.", score: 3 }
        ]
      },
      {
        question: "Do you have a regular process to review who has access to which applications?",
        options: [
          { label: "Manual reviews conducted infrequently.", score: 1 },
          { label: "Automated reviews conducted periodically.", score: 2 },
          { label: "Continuous automated reviews with real-time adjustments.", score: 3 }
        ]
      },
      {
        question: "How do you revocate access to privilege users when they leave the organisation?",
        options: [
          { label: "Manually, often with delays.", score: 1 },
          { label: "Partially automated revocation.", score: 2 },
          { label: "Fully automated and immediate revocation.", score: 3 }
        ]
      },
      {
        question: "How do you enforce policies like segregation of Duties(SOD)?",
        options: [
          { label: "Manually, prone to errors.", score: 1 },
          { label: "Partially automated management.", score: 2 },
          { label: "Fully automated management with continuous monitoring.", score: 3 }
        ]
      },
      {
        question: "Do you have a clear and complete view of all the applications and permissions in your company?",
        options: [
          { label: "No, applications are managed separately.", score: 1 },
          { label: "Partial overview with some centralized management.", score: 2 },
          { label: "Yes, complete unified overview of all applications.", score: 3 }
        ]
      },
      {
        question: "How do you make sure that when someone leaves, they can't access company systems anymore?",
        options: [
          { label: "No assurance, manual process.", score: 1 },
          { label: "Partial assurance with some automation.", score: 2 },
          { label: "Full assurance with automated revocation.", score: 3 }
        ]
      },
      {
        question: "How do you manage service accounts?",
        options: [
          { label: "Manually, with high potential for errors.", score: 1 },
          { label: "Partially automated management.", score: 2 },
          { label: "Fully automated with minimal errors.", score: 3 }
        ]
      },
      {
        question: "How do you ensure that access to sensitive data is granted only to those employees who need it to perform their job duties?",
        options: [
          { label: "Manually, prone to errors.", score: 1 },
          { label: "Partially automated with periodic reviews.", score: 2 },
          { label: "Fully automated with continuous monitoring.", score: 3 }
        ]
      },
      {
        question: "Do you have a role-based access system in place? This means that access is provided to everyone based on the role that they are mapped to.",
        options: [
          { label: "No formal RBAC system in place.", score: 1 },
          { label: "Partially implemented RBAC.", score: 2 },
          { label: "Fully implemented and enforced RBAC system.", score: 3 }
        ]
      },
      {
        question: "Do you have a consolidated view of digital identities and their access across your organization?",
        options: [
          { label: "No consolidated view.", score: 1 },
          { label: "Partial view with some details.", score: 2 },
          { label: "Yes, comprehensive consolidated view.", score: 3 }
        ]
      },
      {
        question: "Do you maintain detailed logs of access to sensitive data, including who accessed the data, when, and what actions were performed?",
        options: [
          { label: "Manually logged, often incomplete.", score: 1 },
          { label: "Partially automated logging.", score: 2 },
          { label: "Fully automated and comprehensive logging.", score: 3 }
        ]
      },
      {
        question: "Do you have a mechanism to protect your organization from insider threats?",
        options: [
          { label: "No specific mechanism.", score: 1 },
          { label: "Partial mechanisms in place.", score: 2 },
          { label: "Comprehensive mechanism with continuous monitoring.", score: 3 }
        ]
      },
      {
        question: "How do you find out if someone breaks the rules or misuses their access?",
        options: [
          { label: "Manually, often after significant delays.", score: 1 },
          { label: "Through periodic reviews and automated alerts for major violations.", score: 2 },
          { label: "Proactively, with real-time monitoring and automated remediation processes.", score: 3 }
        ]
      }
    ]
  }
];
