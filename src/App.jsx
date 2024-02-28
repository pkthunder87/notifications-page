import NotificationsList from './components/NotificationsList';
import NotificationsTop from './components/NotificationsTop';

function App() {
  return (
    <div className="grid h-[100dvh] w-full overflow-scroll rounded-[16px] bg-white px-4 py-4 text-2xl shadow-[0_0_20px_25px_rgba(138,154,183,.08)] sm:mb-8 sm:h-[52.5rem] sm:w-[45.5rem] sm:px-8">
      <NotificationsTop />
      <NotificationsList />
    </div>
  );
}

export default App;
