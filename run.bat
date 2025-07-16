@echo off
REM Chạy file Python ở chế độ "windowed" (không có console) bằng pythonw.exe
REM và chỉ chạy một instance duy nhất của main_app.py
echo Khoi chay Trung tam Dieu hanh...
start "Operations Center" pythonw.exe main_window.py

echo Cua so ung dung se tu dong hien len.
exit