import requests  # type: ignore
import sys


def create_email_account(name):
    payload = {
        "requestor": name,
        "version": "1.0"
    }

    response = requests.post('https://api.nodemailer.com/user', json=payload)

    if response.status_code == 200:
        account = response.json()

        return account

    else:
        raise Exception(f'Could not create Ethereal account: {response.text}')


if __name__ == "__main__":
    if len(sys.argv) > 1:
        account_name = sys.argv[1]
        account = create_email_account(account_name)
        print(account)

    else:
        print("Please provide an account name.")
