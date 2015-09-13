USER_SCRIPT = jisho-quick-radicals.user.js
USER_SCRIPT_META = jisho-quick-radicals.user.meta.js
USER_SCRIPT_BODY = jisho-quick-radicals.user.body.js
ALIASES = aliases.js

CAT = cat
RM = rm

default: $(USER_SCRIPT)

$(USER_SCRIPT): $(USER_SCRIPT_META) $(ALIASES) $(USER_SCRIPT_BODY)
	$(CAT) $(USER_SCRIPT_META) $(ALIASES) $(USER_SCRIPT_BODY) > "$@"

clean:
	$(RM) -rf $(USER_SCRIPT)
