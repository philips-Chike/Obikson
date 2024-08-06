import tkinter as tk
from tkinter import ttk
import webbrowser

def search_music():
    query = entry.get()
    search_url = f"https://www.youtube.com/results?search_query={query}"
    webbrowser.open(search_url)

def open_soundcloud():
    webbrowser.open("https://soundcloud.com/")

# Create main window
root = tk.Tk()
root.title("Free Music Downloader")

# Create search label and entry
label = ttk.Label(root, text="Search for Music:")
label.pack(pady=10)
entry = ttk.Entry(root, width=50)
entry.pack()

# Create search button
search_button = ttk.Button(root, text="Search", command=search_music)
search_button.pack(pady=5)

# Create SoundCloud button
soundcloud_button = ttk.Button(root, text="Open SoundCloud", command=open_soundcloud)
soundcloud_button.pack(pady=5)

# Run the application
root.mainloop()
