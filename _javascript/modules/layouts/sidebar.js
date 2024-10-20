import { modeWatcher } from '../components/mode-watcher';
import { sidebarExpand } from '../components/sidebar';

export function initSidebar() {
  modeWatcher();
  sidebarExpand();

  // Добавляем обработчик события для переключения сайдбара на десктопе
  document.getElementById("sidebar-toggle").addEventListener("click", function() {
    document.body.classList.toggle("sidebar-collapsed"); // Добавляем/убираем класс, скрывающий сайдбар
  });
}
