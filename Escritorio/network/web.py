import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk 
from gi.repository import WebKit
from gi.repository import GLib
def on_go_back(button):
    webview.go_back
def on_go_forward(button):
    webview.go_forward
def on_destroy(window):
    Gtk.main_quit()
def on_enter(entry):
 url = entry.get_text()
 webview.open(url)
window = Gtk.Window()
webview=WebKit.WebView()
webview.open("https://www.gnome.org/")
window.set_title("first blood")
window.connect("destroy",     Gtk.main_quit)
scrolled_window=Gtk.ScrolledWindow()
window.set_default_size(800,600)




headerbar=Gtk.HeaderBar()
headerbar.set_show_close_button(True)
window.set_titlebar(headerbar)


go_back_button = Gtk.Button()
go_back_arrow = Gtk.Image.new_from_icon_name("go-previous",Gtk.IconSize.SMALL_TOOLBAR)
go_back_button.add(go_back_arrow)
go_back_button.connect("clicked", on_go_back)
headerbar.pack_start(go_back_button)


go_forward_button=Gtk.Button()
go_forward_arrow=Gtk.Image.new_from_icon_name("go-next",Gtk.IconSize.SMALL_TOOLBAR)
go_forward_button.add(go_forward_arrow)
go_forward_button.connect("clicked", on_go_forward)

headerbar.pack_start(go_forward_button)

entry=Gtk.Entry()
entry.connect("activate", on_enter)
headerbar.set_custom_title(entry)
scrolled_window.add(webview)
window.add(scrolled_window)
window.show_all()
Gtk.main()














