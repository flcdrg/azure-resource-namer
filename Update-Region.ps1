
function Generate {
  

$grouped = az account list-locations | ConvertFrom-Json -Depth 5 | Where-Object { $_.metadata.regionType -eq "Physical" } | Group-Object { $_.metadata.geographyGroup }


'<template>
  <label for="region" class="form-label">Region</label>
  <select class="form-control" id="region" value.bind="name" title="The Azure region where the resource is deployed">
'

  foreach ($group in $grouped) {
    "    <optgroup label=`"$($group.Name)`">"
    
    foreach ($region in ($group.Group | Sort-Object -Property Name)) {

      "      <option value=`"$($region.name)`" title=`"$($region.metadata.physicalLocation)`">$($region.displayName)</option>"
    }
    "    </optgroup>"
  }

'  </select>
</template>'

}

$content = Generate
# # $grouped | ForEach-Object { "<optgroup label=`"$($_.Name)`">" + $_.Group | ForEach-Object { "  <option value=`"$($_.name)`">$($_.displayName)</option>" } + "</optgroup>" })

Set-Content -Path .\src\region.html -Value $content
