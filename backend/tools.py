def log_interaction_tool(data):
    return {
        "tool":"Log Interaction",
        "result":"Interaction captured successfully"
    }


def edit_interaction_tool(data):
    return {
        "tool":"Edit Interaction",
        "result":"Interaction updated"
    }


def hcp_lookup_tool(data):
    return {
        "tool":"HCP Lookup",
        "result":"Doctor profile fetched"
    }


def followup_tool(data):
    return {
        "tool":"Follow-up Recommendation",
        "result":"Suggested follow-up in 2 weeks"
    }


def summarization_tool(data):
    return {
        "tool":"Summarization",
        "result":"Meeting summarized"
    }