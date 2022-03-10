## Description

Event driven example of sending an email with a mustache template in Nitric

## Usage

### Step 1: Install Nitric

<details>
 <summary>Prerequisites</summary>

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Pulumi](https://www.pulumi.com/docs/reference/cli/)

</details>

<details>
 <summary>MacOs</summary>

Install with [homebrew](https://brew.sh/)

```bash
brew install nitrictech/tap/nitric
```

</details>

<details>
 <summary>Windows</summary>

Install with [scoop](https://scoop.sh/)

```
scoop bucket add nitric https://github.com/nitrictech/scoop-bucket.git
scoop install nitric
```

</details>

<details>
 <summary>Linux</summary>
 
Download as a scripted install via curl.

```bash
curl https://nitric.io/install | bash

```

 </details>

<br/>

> Note: Complete installation guide can be found [here](https://nitric.io/docs/installation)

<br/>

### Step 2: AWS Configuration

```bash
mv env-template .env
```

```
AWS_SES_REGION="us-east-1"
AWS_SES_ACCESS_KEY_ID="..."
AWS_SES_SECRET_ACCESS_KEY="..."

SENDER_EMAIL="..."
SYS_ADMIN_EMAIL="..."
```

> Note: You'll need to whitelist these emails with amazon to send emails

### Step 3: Run the API locally with Nitric

```bash
yarn install
nitric run
```

### Step 4: Consume the API

```bash
curl --location --request GET 'http://127.0.0.1:9001/apis/main/welcome/user'
```

```bash
{ "message": "Glad you're here developing with us - user." }
```

```bash
curl --location --request GET 'http://127.0.0.1:9001/apis/main/events'
```

```bash
{
    "output": {
        "documents": [
            {
                "ref": {
                    "documentClient": {},
                    "parent": {
                        "documentClient": {},
                        "name": "msg"
                    },
                    "id": "e9e18a55-6ed3-4781-b3f7-820ce221eb93"
                },
                "content": {
                    "id": "e9e18a55-6ed3-4781-b3f7-820ce221eb93",
                    "message": "Glad you're here developing with us - user.",
                    "timestamp": "1646942233037"
                }
            }
        ],
        "pagingToken": null
    }
}
```

## What's next?

Explore the [Nitric framework](https://nitric.io/docs) to learn how to deploy to the cloud and much more.
