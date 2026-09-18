import json
import re
import ipaddress

def run_audit():
    print("=" * 70)
    print("🔍 ROUTERGUIDE COMPREHENSIVE DATA AUTHENTICATION & AUDIT SUITE")
    print("=" * 70)

    # 1. Load data from data-loader.ts
    with open('src/lib/data-loader.ts', 'r', encoding='utf-8') as f:
        dl_content = f.read()

    # Load ROUTER_MODELS from router-models-data.ts
    with open('src/lib/router-models-data.ts', 'r', encoding='utf-8') as f:
        rm_content = f.read()

    # Extract JSON blocks using regex
    # A. GATEWAY_IPS
    gw_match = re.search(r'export const GATEWAY_IPS: GatewayIp\[\] = \[(.*?)\];\s*export const BRANDS', dl_content, re.DOTALL)
    if not gw_match:
        gw_match = re.search(r'export const GATEWAY_IPS: GatewayIp\[\] = \[(.*?)\];\nexport const BRANDS', dl_content, re.DOTALL)
    gw_raw = gw_match.group(1) if gw_match else ""

    # B. BRANDS
    b_match = re.search(r'export const BRANDS: Brand\[\] = \[(.*?)\];\s*export const ISPS', dl_content, re.DOTALL)
    if not b_match:
        b_match = re.search(r'export const BRANDS: Brand\[\] = \[(.*?)\];\nexport const ISPS', dl_content, re.DOTALL)
    b_raw = b_match.group(1) if b_match else ""

    # C. ISPS
    i_match = re.search(r'export const ISPS: Isp\[\] = \[(.*?)\];\s*export { ROUTER_MODELS }', dl_content, re.DOTALL)
    if not i_match:
        i_match = re.search(r'export const ISPS: Isp\[\] = \[(.*?)\];\nexport { ROUTER_MODELS }', dl_content, re.DOTALL)
    i_raw = i_match.group(1) if i_match else ""

    # D. ROUTER_MODELS
    rm_match = re.search(r'export const ROUTER_MODELS: RouterModel\[\] = \[(.*?)\];', rm_content, re.DOTALL)
    rm_raw = rm_match.group(1) if rm_match else ""

    print(f"Extracted raw text blocks: GW: {len(gw_raw)} chars, BRANDS: {len(b_raw)} chars, ISPS: {len(i_raw)} chars, MODELS: {len(rm_raw)} chars")

if __name__ == '__main__':
    run_audit()

