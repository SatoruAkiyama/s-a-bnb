import React from "react";

import ErrorContent from "../error-content/ErrorContent";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return <ErrorContent />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
