import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from settings import (
    SMTP_SERVER,
    SMTP_PORT,
    SMTP_FROM_ADDR,
    SMTP_LOGIN,
    SMTP_PASS
)


def send_email(subject, to_addrs, body):
    from_addr = SMTP_FROM_ADDR
    login = SMTP_LOGIN
    password = SMTP_PASS

    msg = MIMEMultipart()
    msg['from'] = 'trip_confirmation@example.com'
    msg['to'] = ', '.join(to_addrs)

    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(login, password)

    text = msg.as_string()

    for email in to_addrs:
        server.sendmail(from_addr, email, text)

    server.quit()
