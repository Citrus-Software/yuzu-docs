---
sidebar_position: 2
---

# Filtering

`opac` comes with a powerful filtering tool enabling you to directly use web api from assetmanager. Indeed, every filter available with web api can be implemented in python through `opac`.

To filter and have multiple objects, you can use `OvermindObject.objects.filter`. If the result is empty, it will raise an `EmptyQuery` error.

:::tip
To have access to all filters you want, you need to specify a project before filtering.
:::

## Example

```python
from opac.models import Asset

pj = getProject("<project name>")

Asset.objects.filter(assetType="sh", parent__name="<episodeName>")
# Get all assets of type "Shot" with parent name equals to "<episodeName>"
```

You can have some advanced filtering thanks to lookups in most asset fields. Check `lookups` to have an idea of the available filters.

:::tip
If you want only *one* object and are sure you have only one occurrence with the indicated filters, you can use `OvermindObject.objects.get`.
If the result is not unique, it will raise a `MultipleObjectsReturned` error.
:::

:::warning
This section is focused on **Assets** but most of it can be true for other types of Yuzu objects.
:::

## Real-life example

```python
from opac.models import Asset, Step, Flag, Task
from opac.helpers import getProject

pj = getProject("<project name>")

step = Step.objects.get(name="<step name>")
# Get the step named "<step name>"

flag = Flag.objects.get(name="<flag name>")
# Get the flag named "<flag name>"

shots = Asset.objects.filter(assetType="sh", parent__name__in=["<episode name 1>", "<episode name 2>"], flags__uuid=flag.uuid)
# Get all shots from episodes "<episode name 1>" and "<episode name 2>" with the flag mentioned above

tasks = models.Task.objects.filter(step__uuid=step.uuid, asset__uuid__in=[sh.uuid for sh in shots])
# Get all tasks corresponding to the shot in the step mentioned above

for task in tasks:
    print(task.assetParent.name, task.asset.name, task.name)
```

:::tip
All these filters work in sub-routes. For example, you can filter episode children by flag with `episode.children.filter(flags__uuid=flag.uuid)`
:::
