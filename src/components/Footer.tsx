import { Component } from "preact";
import "./style/footer.scss";

interface LinkGroupProps {
  title: string;
}

interface LinkProps {
  href: string;
  title: string;
}

function Link(props: LinkProps) {
  return (
    <a
      className="list-group-item list-group-item-light list-group-item-action"
      href={props.href}
    >
      {props.title}
    </a>
  );
}

class LinkGroup extends Component<LinkGroupProps> {
  render() {
    return (
      <div className="list-group">
        <h1 className="list-group-item list-group-item-secondary active title m-0">
          {this.props.title}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export function Footer() {
  return (
    <footer className="main-footer container text-center p-2">
      <hr className="border border-secondary border-1 opacity-50" />
      <div className="row row-cols-4 m-0">
        <LinkGroup title="Project">
          <Link title="Github" href="https://github.com/marcosdly/humangreed" />
        </LinkGroup>
      </div>
    </footer>
  );
}
