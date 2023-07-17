import { sidebarLinks } from "../data/data";

const Sidebar = () => {
  return (
    <aside className="main-aside">
      <div className="aside-buttons">
        {sidebarLinks.map((el) => (
          <button>{el.text}</button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
