import { useState } from "react";
import { useEventListener } from "components/hooks";

const getOnlineStatus = () => (
    (typeof navigator !== "undefined" && typeof navigator.onLine === "boolean")
    ? navigator.onLine
    : true
);

const useIsOnline = () => {
  // State for keeping whether is connected to network
  const [isOnline, setIsOnline] = useState(getOnlineStatus);

  const goOnline = () => setIsOnline(true);
  const goOffline = () => setIsOnline(false);

  // Add event listeners
  useEventListener("online", goOnline, window);
  useEventListener("offline", goOffline, window);

  return isOnline;
};

export { useIsOnline };