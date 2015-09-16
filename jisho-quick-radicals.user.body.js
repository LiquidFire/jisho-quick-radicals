function buildAliasesReverseMap() {
  var reverseMap = {};
  for (var radicalIndex in aliases) {
    var aliasesForRadical = aliases[radicalIndex];
    for (var aliasIndex in aliasesForRadical) {
      var alias = aliasesForRadical[aliasIndex];
      reverseMap[alias] = radicalIndex;
    }
  }
  return reverseMap;
}

function mapAliasToIndex(alias) {
  return aliasesReverseMap[alias];
}

function selectRadical(alias) {
  var radicalIndex = mapAliasToIndex(alias);
  var selector = "li.radical[data-radical='" + radicalIndex + "']";
  var radicalLi = $(selector);
  if (radicalLi.length == 1)
  {
    radicalLi.click();
    return true;
  }
  return false;
}

function installHandler() {
  var form = $("#search");
  form.unbind("submit") // FIXME: need to restore it afterwards
      .submit(function(e) {
        e.stopImmediatePropagation();
        var inputField = $("#keyword");
        var alias = inputField.val();
        if (alias) {
          var selected = selectRadical(alias);
          if (selected) {
            inputField.val("");
          }
        }
        return false;
      });
}

aliasesReverseMap = buildAliasesReverseMap();
$(installHandler());
