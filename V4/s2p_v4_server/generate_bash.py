/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
lines = []

for _ in range(50, 66):
    lines.append("screen -dmS \"server.80"+str(_)+"\" bash -c \'while : ;do python3 server.py 80"+str(_)+"; done;\'\n")

with open('run.bash', 'wt') as f:
    f.writelines(lines)

lines = []

for _ in range(50, 66):
    lines.append("screen -S \"server.80"+str(_)+"\" -X quit\n")

with open('kill.bash', 'wt') as f:
    f.writelines(lines)

lines = []

for _ in range(50, 66):
    lines.append("server 127.0.0.1:80"+str(_)+" weight=4 max_fails=2 fail_timeout=600s;\n")

with open('nginx.txt', 'wt') as f:
    f.writelines(lines)

lines = ["ufw allow 80/tcp\n"]

for _ in range(50, 66):
    lines.append("ufw allow 80"+str(_)+"/tcp\n")

with open('tcp.bash', 'wt') as f:
    f.writelines(lines)

#/etc/nginx/sites-available
#/var/log/nginx

