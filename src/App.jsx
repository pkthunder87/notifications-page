import NotificationsList from './components/NotificationsList';
import NotificationsTop from './components/NotificationsTop';

function App() {
  return (
    <div className="grid h-[80dvh] w-[52dvw] grid-rows-[12.5%_87.5%] rounded-xl bg-white p-4 text-2xl drop-shadow-sm">
      <NotificationsTop />
      <NotificationsList />
    </div>
  );
}

export default App;
