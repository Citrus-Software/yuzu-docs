---
sidebar_position: 1
---

# Bulk

You can bulk-manage from `opac` with `opac.core.OvermindObject.bulkSave()` and `opac.core.OvermindObject.bulkDelete()`

## Bulk creation

You can bulk-create multiple objects with one request in order to optimize your scripts with `opac.core.OvermindObject.bulkSave`.

```python
from opac.models import Asset

pj = getProject("<project name>")

# we instantiate a new asset inside opac
newAsset1 = Asset(name="test", assetType="sh", parent=pj, project=pj, attributes={})
newAsset2 = Asset(name="test", assetType="sh", parent=pj, project=pj, attributes={})

# at this time the two assets only exist in this script
# we need to send the data to Yuzu but we don't want to make two requests. We just need to call `bulkSave`

result = Asset.bulkSave([newAsset1, newAsset2])

# now both assets exist in Yuzu.
```

## Bulk update

You can also bulk-update assets but also bulk-create and bulk-update in the same call.

```python
from opac.models import Asset

pj = getProject("<project name>")

# we instantiate a new asset inside opac
newAsset = Asset(name="test", assetType="sh", parent=pj, project=pj, attributes={})
oldAsset = Asset.objects.get(uuid="<asset uuid>")
oldAsset.name = "new name"

# If we call `bulkSave`, it will call bulkUpdate for the assets
# having a uuid and bulkCreate for the others.

result = Asset.bulkSave([newAsset, oldAsset])

# newAsset is now created and oldAsset is updated
```

## Bulk delete

Finally, you can bulk-delete objects with `opac.core.OvermindObject.bulkDelete()`.

```python
from opac.models import Asset

pj = getProject("<project name>")

# we instantiate a new asset inside opac
assets = Asset.objects.filter(name__startswith="<nam>")
Asset.bulkDelete(assets)
```

:::tip
You can change the batch size with the parameter `batchSize`. It will change the request size. Default is the `page_size`.
:::

## Return value

These operations return the created assets with updated uuid (if it's a creation for example) in dict form with two keys:

- `success`: all assets which have succeeded.
- `fail`: all assets which have failed for any reason.
