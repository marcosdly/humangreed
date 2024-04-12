import "./style/nav.scss";

interface LinkProps {
  href: string;
  title: string;
}

function Link(props: LinkProps) {
  const onclick = (ev: MouseEvent) => {
    ev.preventDefault();
    window.location.pathname = props.href;
  };

  return (
    <>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onclick}
      >
        {props.title}
      </button>
    </>
  );
}

function Toolbar() {
  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Navigation toolbar">
      <div className="btn-group" role="group" aria-label="Subpages">
        <Link title="Why bother?" href="/why_bother" />
        <Link title="Why show ads?" href="/why_ads" />
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <nav className="main-nav p-2">
      <div className="title-container">
        <h1 className="title m-0">Human Greed</h1>
      </div>
      <Toolbar />
    </nav>
  );
}
