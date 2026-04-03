---
sidebar_position: 5
---

# Descendant With Tracking Datas

`opac` has a powerful tool to get multiple datas from different tables in one request. It's named `descendantWithTrackingDatas`.
You need to know an asset (like a folder or an episode) and a trackingScheme (which contains the different columns to display). This route is used in Yuzu FollowUps.
Important to know, it's the trackingScheme which holds the assetType of the wanted descendants. For example, anim-followup is usually only for shots and that's decided by the trackingScheme.

## Example

```python
from opac.models import Asset, TrackingScheme

pj = getProject("<project name>")
trackingScheme = TrackingScheme.objects.get(name="<followup name>")
asset = Asset.objects.get(assetType="ep", name="<episode name>")

assets = asset.descendantWithTrackingDatas(trackingScheme.uuid).filter(name__icontains="<substring>")
# Get all assets of type "Shot" whose name contains "<substring>"

assets = assets.filter(step_<step.uuid>_assignedUser__in=[user.uuid])
# Get all assets of type "Shot" whose task from step <step.uuid> is assigned to given users.

assets = assets.filter(step_<step.uuid>_assignedUser__isnull=True)
# Get all assets of type "Shot" whose task is unassigned.
```


# Descendant With Custom Datas

From 3.1.1, `opac` has also a custom route for tracking datas. Its purpose is to provide a "technical followup". It's currently used in Yuzu Plugin of ttPlayer.
Contrary to the route described above, it's up to you to describe what you need; the config is inside the POST request.

## Example

```python
from opac.models import Asset, TrackingScheme, DynamicApproval, AssetLinkTypes

pj = getProject("<project name>")
asset = Asset.objects.get(assetType="ep", name="<episode name>")

step = Step.objects.get(name="anim-v1")

dynappName = "anim-v1-sup-approval"
dynapp = [dynapp for dynapp in DynamicApproval.objects.all() if dynapp.name == dynappName][0]

allAssetLinkType = [assetLink.uuid for assetLink in AssetLinkTypes.objects.all()]

assets = asset.descendantWithCustomDatas(
    assetTypes=assetTypes,  # only required attribute, other are optional
    allSteps=[step.uuid],  # if you want the tasks with their takes and activities
    allPostBoardNoteSteps=[step.uuid],  # if you want the postboardNotes
    allDynApproval=[dynapp.uuid],
    allAssetLinkType=[assetLink.uuid for assetLink in AssetLinkTypes.objects.all()],
    generalNote=True,  # to include notes with step=None, we need a custom attribute
)
# assetTypes is required because the route needs to get only needed assets and not everything.
# You can literally get the whole production assets if you specify the project as the main asset : pj.descendantWithCustomDatas(...)

assets = assets.filter(name__icontains="<substring>")
# Get all assets of type "Shot" whose name contains "<substring>"

assets = assets.filter(step_<step.uuid>_assignedUser__in=[user.uuid])
# Get all assets of type "Shot" whose task from step <step.uuid> is assigned to given users.

assets = assets.filter(step_<step.uuid>_assignedUser__isnull=True)
# Get all assets of type "Shot" whose task is unassigned.
```
