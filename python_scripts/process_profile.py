# python_scripts/process_profile.py

import json

def process_profile(profile_data):
    # Example process: Count total features
    profile = json.loads(profile_data)
    profile['feature_count'] = len(profile.get('features', []))
    return json.dumps(profile)

if __name__ == "__main__":
    profile_data = '{"theme": "Dark", "font": "Arial", "features": ["Feature1", "Feature2"]}'
    print(process_profile(profile_data))
