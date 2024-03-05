import React, { Component, ErrorInfo, ReactNode } from "react";
import FallBackUI from "./FallbackUI";

interface Props {
  children?: ReactNode;
  FallBackUI:ReactNode
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  // public static getDerivedStateFromError(_: Error): State {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({hasError:true})
  }

  public render() {
    if (this.state.hasError) {
      return <h1><FallBackUI/></h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
