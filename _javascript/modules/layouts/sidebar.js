import { modeWatcher } from '../components/mode-watcher';
import { sidebarExpand } from '../components/sidebar';

export function initSidebar() {
  modeWatcher();
  sidebarExpand();

  // Add event listener for desktop sidebar toggle
  document.getElementById("sidebar-toggle").addEventListener("click", function() {
    document.body.classList.toggle("sidebar-collapsed"); // Добавляем/убираем класс, скрывающий сайдбар
  });
}
