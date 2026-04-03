---
sidebar_position: 1
slug: developer_guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

**Welcome to the Yuzu Developer Guide!** 

This part of the Yuzu documentation is intended to **Python developers**.
With its Python scripting API, named `opac`, you will be able to develop custom automations, connect to your Pipeline, tools or storage Server using scripts.

`opac` (Yuzu-Yuzu Python Api Client) is part of the Yuzu_ asset manager project.
The main goal of `opac` is to provide an object oriented mapping for Yuzu API.



## Requirements

- Python 2.7.*, 3.6+
- Python modules:

    - requests >= 2.22.0
    - six >= 1.12.0
    - typing >= 3.6.6


## First steps

### 1. Connect to Yuzu

First you need an account to connect to Yuzu then you can use the helper `opac.helpers.connect`:

<Tabs>
  <TabItem value="Authentication connect" label="Authentication connect" default>
    config.json :
    ```json
    {
        "USERNAME": "<login>", 
        "PASSWORD": "<password>"
    }
    ```
    
    main.py :
    ```python
    import json
    from opac.helpers import connect, autoConnect
    
    try:
        settings = {
            "API_HOST": "<your_yuzu_url>/api",
        }

        with open("config.json", "r") as fd:
            config = json.load(fd)

        if connect(config["USERNAME"], config["PASSWORD"], settings):
            print("Connection established.")
    except json.JSONDecodeError as e:
        print("Could not load configuration file :", e)
    ```
  </TabItem>
  <TabItem value="Token loaded by Third party software" label="Token loaded by Third party software">
    ```python
    from opac.helpers import connect, autoConnect

    settings = {
        "API_HOST": "<your_yuzu_url>/api",
    }

    # if you are logged in Sentry that deals with token connection
    if autoConnect(settings):
        print("Connection established.")
        ```
  </TabItem>
</Tabs>

:::caution
Never commit some code with your password. Always prefer using a local configuration file excluded from your commits.
:::

### 2. Select a project

Then you must select a project with `opac.helpers.getProject`:

```python
from opac.helpers import getProject

pj = getProject("<project name>")
```

This step will automatically scope all your future calls to this project. To change project just call `opac.helpers.getProject` again.

:::warning
You must have the right permissions in Yuzu in order to access a project.
:::


### 3. Accessing data

#### Using models request and filters
`opac` provides an abstraction layer (the `opac.models`) for manipulating the data of Yuzu.
Every model instance has the attribute `objects` which is a `RestManager` already configured to retrieve data for this model.

Example:

```python
from opac.models import Asset

# first we create a new PageIterator from the default one with a filter on asset type.
episodes = Asset.objects.filter(assetType="ep")

# Then we access the data
for ep in episodes:
    # Finally we print the episode name
    print(ep.name)
```

In addition to those attributes, each model will implement a bunch of properties corresponding to the related endpoint on the server.

Example:

```python
from opac.models import Asset

# First we get a specific asset, here the episode 101
episode = Asset.objects.get(name="101", assetType="ep")

# Then we call a specific method to get all children of this asset
for child in episode.children:
    # Finally we print the child asset name
    print(child.name)
```

#### Direct access to some objects

If you have the uuid (the unique id of every object on the server), you don't need to use `objects`. You can directly access the object with `get`.

Example:

```python
from opac.models import Asset

# let's say we want an object of type Asset with uuid "11sd5cd0-3c68-c8ce-4e69-0242ac130005"
episode = Asset.get("11sd5cd0-3c68-c8ce-4e69-0242ac130005")

# Then we call a specific method to get all children of this asset
for child in episode.children:
    # Finally we print the child asset name
    print(child.name)
```


### 4. Creating and modifying data

Each object obtained through `opac` is an instance of `OvermindObject`. This allows access to convenience
methods to interact with Yuzu.

#### Object creation example:

```python
from opac.models import Asset

pj = getProject("<project name>")

# we instantiate a new asset inside opac
newAsset = Asset(name="test", assetType="sh", parent=pj, project=pj, attributes={})

# at this time the object only exists in this script
# we need to send the data to Yuzu to truly create it

newAsset.save()

# now the asset exists in Yuzu and the field uuid is now filled
```

#### Object update example:

```python
from opac.models import Asset

pj = getProject("<project name>")

# we get an existing asset
asset = Asset.objects.get(uuid="<asset uuid>")

# we update the data
asset.name = "new name"

# at this time the new data isn't synchronized with Yuzu

asset.save()

# now the asset is up to date in Yuzu
```

:::tip
`opac` automatically detects changes in objects; calling `save` without modifications will not send any requests.
:::

The update will only take into account the updated field. Example:

```python
...

asset = Asset.objects.get(uuid="<asset uuid>")
# we update the data
asset.name = "new name"
asset.save()
"""
request content:
{
    "uuid": <asset uuid>,
    "name": "new name"
}
"""
```

#### You can also delete an object from Yuzu

```python
from opac.models import Asset

pj = getProject("<project name>")

# we get an existing asset
asset = Asset.objects.get(uuid="<asset uuid>")
asset.delete()
# now the asset is deleted from Yuzu
```

:::important
To create, update or delete multiple objects at once, see [management](/developer_guide/management).
:::


## Timeout

You can override the default request timeout (10 seconds) using an environment variable.

```python
### This need to be done BEFORE ANY import from opac
import os
os.environ["REQUESTS_DEFAULT_TIMEOUT"] = "30"

### Then you can use opac normally
import opac
```

Max timeout on server side is 60 seconds.
