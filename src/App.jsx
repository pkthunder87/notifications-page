import NotificationsList from './components/NotificationsList';
import NotificationsTop from './components/NotificationsTop';

function App() {
  return (
    <div className="grid h-[84dvh] w-[56dvw] grid-rows-[12.5%_87.5%] overflow-scroll rounded-xl bg-white px-8 py-4 text-2xl drop-shadow-sm">
      <NotificationsTop />
      <NotificationsList />
    </div>
  );
}

export default App;
