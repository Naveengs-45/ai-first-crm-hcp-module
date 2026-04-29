
from langgraph.graph import StateGraph

from tools import (
    log_interaction_tool,
    edit_interaction_tool,
    hcp_lookup_tool,
    followup_tool,
    summarization_tool
)

def router(state):
    msg = state["input"].lower()

    if "edit" in msg:
        return {"output": edit_interaction_tool(msg)}

    elif "profile" in msg:
        return {"output": hcp_lookup_tool(msg)}

    elif "follow" in msg:
        return {"output": followup_tool(msg)}

    elif "summary" in msg:
        return {"output": summarization_tool(msg)}

    else:
        return {"output": log_interaction_tool(msg)}


builder = StateGraph(dict)

builder.add_node("router", router)

builder.set_entry_point("router")

builder.set_finish_point("router")

graph = builder.compile()


def run_agent(user_input):

    result = graph.invoke({
        "input": user_input
    })

    return result["output"]